import React, { useRef, useState, useEffect } from 'react';
import styles from "styles/BubbleElement.module.css";

const defaultOptions = {
	size: 200,
	minsize: 20,
	gutter: 16,
	provideProps: false,
	numCols: 6,
	fringeWidth: 100,
	yRadius: 200,
	xRadius: 200,
	cornerRadius: 100,
	showGuides: false,
	compact: false,
	gravitation: 0
};
export default function BubbleElement(props) {


	let options = {};
	Object.assign(options, defaultOptions);
	Object.assign(options, props.options);
	options.numCols = Math.min(options.numCols, props.children.length);
	const minProportion = options.minsize / options.size;
	const verticalPadding = `calc(50% - ${options.yRadius + options.size / 2 - options.cornerRadius * (1.414 - 1) / 1.414}px)`;
	const horizontalPadding = `calc(50% - ${options.xRadius + options.size / 2 - options.cornerRadius * (1.414 - 1) / 1.414}px)`;
	const scrollable = useRef(null);
	let rows = [];
	var colsRemaining = 0;
	var evenRow = true;

	for (var i = 0; i < props.children.length; i++) {
		if (colsRemaining == 0) {
			colsRemaining = evenRow ? options.numCols - 1 : options.numCols;
			evenRow = !evenRow;
			rows.push([]);
		}

		rows[rows.length - 1].push(props.children[i]);
		colsRemaining--;
	}

	if (rows.length > 1) {
		if (rows[rows.length - 1].length % 2 == rows[rows.length - 2].length % 2) {
			rows[rows.length - 1].push( /*#__PURE__*/React.createElement("div", null));
		}
	}

	const [scrollTop, setScrollTop] = useState(0);
	const [scrollLeft, setScrollLeft] = useState(0);

	const handleScroll = e => {
		if (e.target.className) {
			setScrollTop(e.target.scrollTop);
			setScrollLeft(e.target.scrollLeft);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		scrollable.current.scrollTo((scrollable.current.scrollWidth - scrollable.current.clientWidth) / 2, (scrollable.current.scrollHeight - scrollable.current.clientHeight) / 2);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const interpolate = (actualMin, actualMax, val, targetMin, targetMax) => {
		return (val - actualMin) / (actualMax - actualMin) * (targetMax - targetMin) + targetMin;
	};

	const getBubbleSize = (row, col) => {
		const yOffset = (options.size + options.gutter) * 0.866 * row - options.size + options.cornerRadius * (1.414 - 1) / 1.414 - (options.yRadius - options.size);
		const xOffset = (options.size + options.gutter) * col + (options.numCols - rows[row].length) * (options.size + options.gutter) / 2 - options.size + options.cornerRadius * (1.414 - 1) / 1.414 - (options.xRadius - options.size);
		const dy = yOffset - scrollTop;
		const dx = xOffset - scrollLeft;
		const distance = Math.sqrt(dx * dx + dy * dy);
		let out = {
			bubblesize: 1,
			translateX: 0,
			translateY: 0,
			distance: distance
		};
		let distanceFromEdge = 0;
		let isInCornerRegion = false;

		if (Math.abs(dx) <= options.xRadius && Math.abs(dy) <= options.yRadius) {
			if (Math.abs(dy) > options.yRadius - options.cornerRadius && Math.abs(dx) > options.xRadius - options.cornerRadius) {
				const distToInnerCorner = Math.sqrt(Math.pow(Math.abs(dy) - options.yRadius + options.cornerRadius, 2) + Math.pow(Math.abs(dx) - options.xRadius + options.cornerRadius, 2));

				if (distToInnerCorner > options.cornerRadius) {
					distanceFromEdge = distToInnerCorner - options.cornerRadius;
					isInCornerRegion = true;
				}
			}
		} else if (Math.abs(dx) <= options.xRadius + options.fringeWidth && Math.abs(dy) <= options.yRadius + options.fringeWidth) {
			if (Math.abs(dy) > options.yRadius - options.cornerRadius && Math.abs(dx) > options.xRadius - options.cornerRadius) {
				isInCornerRegion = true;
				const distToInnerCorner = Math.sqrt(Math.pow(Math.abs(dy) - options.yRadius + options.cornerRadius, 2) + Math.pow(Math.abs(dx) - options.xRadius + options.cornerRadius, 2));
				distanceFromEdge = distToInnerCorner - options.cornerRadius;
			} else {
				distanceFromEdge = Math.max(Math.abs(dx) - options.xRadius, Math.abs(dy) - options.yRadius);
			}
		} else {
			isInCornerRegion = Math.abs(dy) > options.yRadius - options.cornerRadius && Math.abs(dx) > options.xRadius - options.cornerRadius;

			if (isInCornerRegion) {
				const distToInnerCorner = Math.sqrt(Math.pow(Math.abs(dy) - options.yRadius + options.cornerRadius, 2) + Math.pow(Math.abs(dx) - options.xRadius + options.cornerRadius, 2));
				distanceFromEdge = distToInnerCorner - options.cornerRadius;
			} else {
				distanceFromEdge = Math.max(Math.abs(dx) - options.xRadius, Math.abs(dy) - options.yRadius);
			}
		}

		out.bubblesize = interpolate(0, options.fringeWidth, Math.min(distanceFromEdge, options.fringeWidth), 1, minProportion);
		const translationMag = options.compact ? (options.size - options.minsize) / 2 : 0;
		const interpolatedTranslationMag = interpolate(0, options.fringeWidth, distanceFromEdge, 0, translationMag);

		if (distanceFromEdge > 0 && distanceFromEdge <= options.fringeWidth) {
			out.translateX = interpolatedTranslationMag;
			out.translateY = interpolatedTranslationMag;
		} else if (distanceFromEdge - options.fringeWidth > 0) {
			const extra = Math.max(0, distanceFromEdge - options.fringeWidth - options.size / 2) * options.gravitation / 10;
			out.translateX = translationMag + extra;
			out.translateY = translationMag + extra;
		}

		if (isInCornerRegion) {
			const cornerDx = Math.abs(dx) - options.xRadius + options.cornerRadius;
			const cornerDy = Math.abs(dy) - options.yRadius + options.cornerRadius;
			let theta = Math.atan(-cornerDy / cornerDx);

			if (dx > 0) {
				if (dy > 0) {
					theta *= -1;
				}
			} else {
				if (dy > 0) {
					theta += Math.PI;
				} else {
					theta += Math.PI - 2 * theta;
				}
			}

			out.translateX *= -Math.cos(theta);
			out.translateY *= -Math.sin(theta);
		} else if (Math.abs(dx) > options.xRadius || Math.abs(dy) > options.yRadius) {
			if (Math.abs(dx) > options.xRadius) {
				out.translateX *= -Math.sign(dx);
				out.translateY = 0;
			} else {
				out.translateY *= -Math.sign(dy);
				out.translateX = 0;
			}
		}

		return out;
	};

	return /*#__PURE__*/React.createElement("div", {
		className: props.className,
		style: {
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			...props.style
		}
	}, /*#__PURE__*/React.createElement("div", {
		className: styles.container
	}, /*#__PURE__*/React.createElement("div", {
		className: styles.scrollable,
		ref: scrollable,
		onScroll: handleScroll
	}, /*#__PURE__*/React.createElement("div", {
		className: styles.horizontalSpacer,
		style: {
			height: verticalPadding
		}
	}), /*#__PURE__*/React.createElement("div", {
		className: styles.rowContainer,
		style: {
			width: options.size * options.numCols + options.gutter * (options.numCols - 1),
			paddingLeft: horizontalPadding,
			paddingRight: horizontalPadding
		}
	}, rows.map((row, i) => {
		return /*#__PURE__*/React.createElement("div", {
			className: styles.row,
			key: i,
			style: {
				marginTop: i > 0 ? options.size * -0.134 + options.gutter * 0.866 : 0
			}
		}, row.map((comp, j) => {
			const {
				bubblesize,
				translateX,
				translateY,
				distance
			} = getBubbleSize(i, j);
			return /*#__PURE__*/React.createElement("div", {
				key: j,
				className: styles.bubbleContainer,
				style: {
					width: options.size,
					height: options.size,
					marginRight: options.gutter / 2,
					marginLeft: options.gutter / 2,
					transform: `translateX(${translateX}px) translateY(${translateY}px) scale(${bubblesize})`
				}
			}, options.provideProps ? React.cloneElement(comp, {
				bubblesize: bubblesize * options.size,
				distancetocenter: distance,
				maxsize: options.size,
				minsize: options.minsize
			}) : comp);
		}));
	})), /*#__PURE__*/React.createElement("div", {
		className: styles.horizontalSpacer,
		style: {
			height: verticalPadding
		}
	})), options.showGuides ? /*#__PURE__*/React.createElement("div", {
		className: styles.guideContainer
	}, /*#__PURE__*/React.createElement("div", {
		className: styles.guide,
		style: {
			height: options.yRadius * 2,
			width: options.xRadius * 2,
			borderRadius: options.shape == "ellipse" ? "50%" : options.cornerRadius
		}
	}), /*#__PURE__*/React.createElement("div", {
		className: styles.guide,
		style: {
			height: (options.yRadius + options.fringeWidth) * 2,
			width: (options.xRadius + options.fringeWidth) * 2,
			borderRadius: options.shape == "ellipse" ? "50%" : options.cornerRadius + options.fringeWidth
		}
	})) : null));
}

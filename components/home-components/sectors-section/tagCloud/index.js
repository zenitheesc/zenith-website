/* eslint-disable */

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

const _react = _interopRequireDefault(require('react'));

const _tag = _interopRequireDefault(require('./tag'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _typeof(obj) {
  if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype
        ? 'symbol'
        : typeof obj;
    };
  }
  return _typeof(obj);
}

function _extends() {
  _extends =
    Object.assign ||
    function (target) {
      for (let i = 1; i < arguments.length; i++) {
        const source = arguments[i];
        for (const key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends.apply(this, arguments);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

function _defineProperties(target, props) {
  for (let i = 0; i < props.length; i++) {
    const descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ('value' in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === 'object' || typeof call === 'function')) {
    return call;
  }
  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError('Super expression must either be null or a function');
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: { value: subClass, writable: true, configurable: true },
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf =
    Object.setPrototypeOf ||
    function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
  return _setPrototypeOf(o, p);
}

const BASEANGLE = Math.PI / 360;

const TagCloud =
  /* #__PURE__ */
  (function (_React$Component) {
    _inherits(TagCloud, _React$Component);

    function TagCloud(props) {
      let _this;

      _classCallCheck(this, TagCloud);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(TagCloud).call(this, props));
      _this.state = {
        speed: _this.props.speed || 1,
        R: props.radius || 200,
        angleX: (props.speed || 1) * BASEANGLE,
        angleY: (props.speed || 1) * BASEANGLE,
        tags: [],
        timer: '',
      };
      return _this;
    }

    _createClass(TagCloud, [
      {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
          const _this2 = this;

          if (nextProps.tagName != this.props.tagName) {
            const animation = function animation() {
              _this2.rotateX();

              _this2.rotateY();

              requestAnimationFrame(animation);
            };

            requestAnimationFrame(function () {
              animation();
            });
            this.move(nextProps.tagName);
          }
        },
      },
      {
        key: 'componentDidMount',
        value: function componentDidMount() {
          const _this3 = this;

          document.addEventListener('mousemove', function (e) {
            const angleX =
              2 * (e.clientX / document.body.getBoundingClientRect().width - 0.5) * _this3.state.speed * BASEANGLE;
            const angleY =
              2 * (e.clientY / document.body.getBoundingClientRect().height - 0.5) * _this3.state.speed * BASEANGLE;

            _this3.setState({
              angleX,
              angleY,
            });
          });

          if (this.props.tagName.length === 0) {
            return;
          }

          console.log(22);

          const animation = function animation() {
            _this3.rotateX();

            _this3.rotateY();

            requestAnimationFrame(animation);
          };

          requestAnimationFrame(function () {
            animation();
          });
          this.move(this.props.tagName);
        }, // handleMouseover(e) {
        // 	const angleY = 2 * (e.clientX / document.body.getBoundingClientRect().width - 0.5) * speed * BASEANGLE;
        // 	const angleX = 2 * (e.clientY / document.body.getBoundingClientRect().height - 0.5) * speed * BASEANGLE;
        // 	this.setState({ angleX, angleY })
        // }
        // handleMouseout() {
        // 	const angleX = this.state.speed * BASEANGLE
        // 	const angleY = this.state.speed * BASEANGLE
        // 	this.setState({ angleX, angleY })
        // }
      },
      {
        key: 'move',
        value: function move(tagName) {
          const _this4 = this;

          const len = tagName.length;
          const tags = tagName.map(function (tag, i) {
            const angleA = Math.acos((2 * (i + 1) - 1) / len - 1);
            const angleB = angleA * Math.sqrt(len * Math.PI);
            const z = _this4.state.R * Math.cos(angleA);
            const y = _this4.state.R * Math.sin(angleA) * Math.sin(angleB);
            const x = _this4.state.R * Math.sin(angleA) * Math.cos(angleB);
            // const color = `#${Math.floor(Math.random() * 0xffffff).toString(16)}`;
            const color = '#000'
            const tagProps = {
              x,
              y,
              z,
              name: tag,
              color,
            };
            return tagProps;
          });
          this.setState({
            tags,
          });
        },
      },
      {
        key: 'rotateX',
        value: function rotateX() {
          const cos = Math.cos(this.state.angleX);
          const sin = Math.sin(this.state.angleX);
          const tags = this.state.tags.map(function (tag) {
            const y = tag.y * cos - tag.z * sin;
            const z = tag.z * cos + tag.y * sin;
            tag.y = y;
            tag.z = z;
            return tag;
          });
          this.setState({
            tags,
          });
        },
      },
      {
        key: 'rotateY',
        value: function rotateY() {
          const cos = Math.cos(this.state.angleY);
          const sin = Math.sin(this.state.angleY);
          const tags = this.state.tags.map(function (tag) {
            const x = tag.x * cos - tag.z * sin;
            const z = tag.z * cos + tag.x * sin;
            tag.x = x;
            tag.z = z;
            return tag;
          });
          this.setState({
            tags,
          });
        },
      },
      {
        key: 'render',
        value: function render() {
          const _this5 = this;

          const containerStyle = {
            width: '100%',
            heght: '100%',
          };
          const wrapperStyle = {
            position: 'relative',
            left: '50%',
            top: '100px',
          };
          return _react.default.createElement(
            'div',
            {
              className: 'tag-cloud-container',
              style: containerStyle,
            },
            _react.default.createElement(
              'div',
              {
                className: 'wrapper',
                style: wrapperStyle,
              },
              this.state.tags.map(function (tag, index) {
                return _react.default.createElement(
                  _tag.default,
                  {
                    url: _this5.props.url,
                    key: index,
                    ...tag,
                  },
                  ' ',
                );
              }),
            ),
          );
        },
      },
    ]);

    return TagCloud;
  })(_react.default.Component);

exports.default = TagCloud;

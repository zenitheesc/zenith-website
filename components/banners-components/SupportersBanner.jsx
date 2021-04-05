import GridElement from './elements/GridElement';
import styles from 'styles/SupportersBanner.module.css';

function SupportersBanner(props) {
	const { title, detail, supporters, supportersMerchant } = props.textContent;

	return (
		<section className={`-section ${styles.supportersSection}`}>
			<div className={`-standardContainer ${styles.supportersBanner}`}>
				<div className={styles.textSection}>
					<h2 className="-homepage-section-title">
						{title}
					</h2>
					<h3 className="-homepage-section-subtitle">
						{detail}
					</h3>
				</div>
				<GridElement supporters={supporters} supportersMerchant={supportersMerchant} />
			</div>
		</section>
	)
}


export default SupportersBanner;
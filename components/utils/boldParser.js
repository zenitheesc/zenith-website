
export default function boldParser(string) {
	const array = string.split('*');

	const components = array.map((substring,index) => {
		if (substring.endsWith('/') && substring.startsWith('/')) {
			return <b key={index}>{substring.split('/')}</b>
		} else {
			return <span key={index}>{substring}</span>
		}
	})

	return components;
}
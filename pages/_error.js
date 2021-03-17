export default function Error({ statusCode }) {
	return (
		<p>
			{statusCode
				? `${statusCode}가 발생했습니다. on Server`
				: `문제가 발생했습니다. on Client`
			}
		</p>
	);
}

Error.getInitialProps = ({ res, err }) => {
	const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
	return { statusCode };
};


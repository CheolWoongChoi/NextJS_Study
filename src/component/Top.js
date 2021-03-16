import { Header } from 'semantic-ui-react';
import Gnb from './Gnb';

export default function Top() {
	return (
		<div>
			<div style={{ display: 'flex', paddingTop: 20 }}>
				<div style={{ flex: '1000px 0 0'}}>
					<img 
						src='/images/dog.jpg' 
						alt='dog' 
						style={{ width: '200px' }}
					/>
					<Header as='h1'>철스커</Header>
					<Gnb />
				</div>
			</div>
		</div>
	);
}
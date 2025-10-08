import { createRoot } from 'react-dom/client';
import { PageRouter } from './PageRouter';
import { Web3Container } from '../components/container';
import { Layout } from '../components';

export default class App extends HTMLElement {
	connectedCallback() {
		createRoot(this).render(
			<Web3Container>
				<Layout>
					<PageRouter />
				</Layout>
			</Web3Container>
		);
	}
}

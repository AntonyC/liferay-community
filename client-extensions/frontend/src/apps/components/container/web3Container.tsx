// import '../styles/globals.css';
import '@rainbow-me/rainbowkit/styles.css';
import { type ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { configWagmi } from '../../configs';
import { CxContainer } from './CxContainer';

import { Bounce, ToastContainer } from 'react-toastify';

const client = new QueryClient();

interface Props {
	children: ReactNode;
}

export const Web3Container = ({ children }: Props) => {
	return (
		<CxContainer>
			<WagmiProvider config={configWagmi}>
				<QueryClientProvider client={client}>
					<RainbowKitProvider>
						<ToastContainer
							position='top-center'
							autoClose={5000}
							hideProgressBar={false}
							newestOnTop={false}
							closeOnClick={false}
							rtl={false}
							pauseOnFocusLoss
							draggable
							pauseOnHover
							theme='light'
							transition={Bounce}
						/>
						{children}
					</RainbowKitProvider>
				</QueryClientProvider>
			</WagmiProvider>
		</CxContainer>
	);
};

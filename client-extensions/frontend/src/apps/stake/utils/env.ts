import { type Address, zeroAddress } from 'viem';

export const StakeContractAddress =
	(import.meta.env.VITE_PUBLIC_STAKE_ADDRESS as Address) || zeroAddress;

// add token to MetaMask
export async function addTokenToMetaMask(tokenData: {
  address: string;
  symbol: string;
  decimals: number;
  image?: string;
}) {
  try {
    if (typeof window === "undefined" || !window.ethereum) {
      throw new Error("MetaMask is not installed");
    }

    // add token
    const wasAdded = await window.ethereum.request({
      method: "wallet_watchAsset",
      params: {
        type: "ERC20",
        options: {
          address: tokenData.address,
          symbol: tokenData.symbol,
          decimals: tokenData.decimals,
          image: tokenData.image || "",
        },
      },
    });

    if (wasAdded) {
      console.log(`add ${tokenData.symbol} successfully!`);
      return true;
    } else {
      console.log("adding canceled");
      return false;
    }
  } catch (error) {
    console.error("add failed:", error);
    throw error;
  }
}

// add MetaNode to MetaMask
export async function addMetaNodeToMetaMask(metaNodeAddress: string) {
  return addTokenToMetaMask({
    address: metaNodeAddress,
    symbol: "MetaNode",
    decimals: 18,
    image: "", // MetaNode logo URL
  });
}

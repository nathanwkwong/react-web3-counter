export function getEth() {
    //@ts-ignore
    const eht = window.ethereum;
    if (!eht) {
        throw new Error('No metamask found');
    }
    return eht;
}

export async function hasAccounts(): Promise<boolean> {
    const eth = getEth();
    const accounts = (await eth.request({
        method: 'eth_accounts' // request metamask for data
    })) as string[];
    return accounts && accounts.length > 0;
}

export async function requestAccounts(): Promise<boolean> {
    //@ts-ignore
    const result = (await window.ethereum.request({
        method: 'eth_requestAccounts'
    })) as string[];
    return result && result.length > 0;
}

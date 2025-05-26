import { useBalanceStore } from "../state/useBalanceStore.js";

export const useBalance = () => {
    const balance = useBalanceStore((state)=> state.balance);
    return balance
}
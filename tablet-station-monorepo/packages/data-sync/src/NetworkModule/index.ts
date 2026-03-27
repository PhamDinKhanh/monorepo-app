
import { NetworkInfo } from './Network.types';
import NetworkModule from './NetworkModule'

export const checkIsConnected = (): boolean => {
    return NetworkModule.isConnected();
};

export const fetchNetworkInfo = async (): Promise<NetworkInfo> => {
    try {
        return await NetworkModule.getNetworkInfo();
    } catch (error) {
        console.error("[NetworkModule] Lỗi lấy thông tin mạng:", error);
        return { isConnected: false, isValidated: false, type: 'UNKNOWN' };
    }
};

export const subscribeToNetworkChanges = (
    callback: (info: NetworkInfo) => void
): (() => void) => {
    // Nhờ NetworkModuleType, chữ 'networkChanged' sẽ được TS tự động gợi ý (autocomplete).
    // Nếu bạn gõ sai tên event, TS sẽ báo lỗi compile ngay lập tức.
    const subscription = NetworkModule.addListener('networkChanged', callback);

    // Trả về hàm dọn dẹp thuần túy
    return () => {
        subscription.remove();
    };
};
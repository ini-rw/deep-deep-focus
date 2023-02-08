import { SyncStorage } from '@deep/common/src/services/SyncStorage';
export async function getFocusStatus(dispatch): Promise<{ success: boolean; active: boolean | null }> {
  try {
    const { data: focusMode } = await SyncStorage.get<boolean>('isFocusModeActive');

    return { success: true, active: focusMode || false };
  } catch (error) {
    return { success: false, active: null };
  }
}

export async function getFocusStatus(): Promise<{ success: boolean; active: boolean | null }> {
  try {
    const { data: focusMode } = await SyncStorage.get<boolean>('isFocusModeActive');

    return { success: true, active: focusMode || false };
  } catch (error) {
    return { success: false, active: null };
  }
}

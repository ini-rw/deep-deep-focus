export async function getFocusStatus(): Promise<{ success: boolean; active: boolean | null }> {
  try {
    const { focusMode } = await chrome.storage.sync.get('isFocusModeActive');
    return { success: true, active: focusMode };
  } catch (error) {
    return { success: false, active: null };
  }
}

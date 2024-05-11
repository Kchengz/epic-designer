import { useToggle } from "@vueuse/core";
import { useShareStore } from "../shareStore";
 
export function useTheme() {
    const { isDark } = useShareStore()
  const toggleDark = useToggle(isDark)
  return {
    isDark,
    toggleDark,
  };
}

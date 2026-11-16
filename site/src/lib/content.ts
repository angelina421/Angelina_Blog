export type Locale = 'zh-CN' | 'en';

export const series = [
  {
    key: 'Linux 入门',
    en: 'Getting started with Linux',
    descriptionZh: '从安装环境开始，逐步认识 Shell、文件系统和网络。',
    descriptionEn: 'A practical path through installation, Shell, file systems, and networking.',
  },
] as const;

// Keep the order of the five folders in the source VMware notebook.
const originalOrder = [
  'Linux系统安装',
  'Shell 常见命令',
  'Linux 和 Windows 交互',
  'Linux 文件系统',
  'Linux 网络配置',
];

export function noteOrder(title: string) {
  const index = originalOrder.indexOf(title);
  return index === -1 ? Number.MAX_SAFE_INTEGER : index;
}

const englishTitles: Record<string, string> = {
  'Linux系统安装': 'Installing Linux',
  'Shell 常见命令': 'Common Shell Commands',
  'Linux 和 Windows 交互': 'Working Across Linux and Windows',
  'Linux 文件系统': 'The Linux File System',
  'Linux 网络配置': 'Linux Network Configuration',
};

export function noteTitle(title: string, locale: Locale) {
  return locale === 'en' ? englishTitles[title] ?? title : title;
}

type CxArg = string | null | undefined | false;

export const cx = (...args: CxArg[]): string => args.filter(Boolean).join(' ');

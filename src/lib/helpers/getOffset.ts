export default (url: string): number | null => {
    const parts = url.split('?').pop()?.split('&');

    const offset = parts?.find((part) => part.startsWith('offset'))?.split('=').pop();

    return offset ? parseInt(offset, 10) : null;
};
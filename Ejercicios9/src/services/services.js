const getData = async (url) => {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const result = await response.json();
            return result;
        }
    } catch (error) {
        console.error(error);
    }
};

export { getData };

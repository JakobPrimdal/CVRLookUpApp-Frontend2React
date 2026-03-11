export async function fetchCvr(cvrNumber) {
    const response = await fetch(
        `${import.meta.env.VITE_API_URL}/company/${cvrNumber}`
    );

    if (!response.ok) {
         try {
            const errorDto = await response.json();
            const error = new Error(errorDto.message);
            error.status = errorDto.status;
            error.timestamp = errorDto.timestamp;
            throw error;
        } catch {
            throw new Error(`Request failed with status ${response.status}`);
        }
    }

    return await response.json();
}

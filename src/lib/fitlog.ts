export const getAllFitlogData = async () => {
    try {
        const res = await fetch(
            "https://api.abcz.workers.dev/api/fitlog"
        );

        if (!res.ok) {
            throw new Error(
                `Failed to fetch workout data: ${res.status}`
            );
        }

        const data = await res.json();

        return data;
    } catch (error) {
        console.error("Fitlog API Error:", error);

        return [];
    }
};
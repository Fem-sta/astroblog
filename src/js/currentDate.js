 export default function currentDate(){
        const today = new Date();
        const formatted = today.toLocaleDateString("en-US", {
        month: "short",  // "Jan", "Feb", "Mar" ...
        day: "numeric",  // 1–31
        year: "numeric", // 2025
        });

        return(formatted); // → "Oct 30, 2025"

    };
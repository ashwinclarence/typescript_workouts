
// this is instead of enum

const statusType = {
    PENDING:"pending",
    COMPLETED:"completed",
    FAILED:"failed"
}

function getStatus(orderID: string, status: keyof typeof statusType) {
    console.log(orderID, "==", status);
}

getStatus("1234","COMPLETED")
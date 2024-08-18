

type statusType = "shipping" | "delivered" | "pending";


let currentStatus: statusType = "delivered";

let previousState: statusType='delivered';

if (previousState === 'delivered') {
    currentStatus = "shipping";
}

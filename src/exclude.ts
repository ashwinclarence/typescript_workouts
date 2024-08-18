


type OrderStatusType = 'confirmed' | 'shipping' | 'delivered';

// we excluded the confirmed order status so it no longer available in the below line
const excludeObject:Exclude<OrderStatusType,"confirmed">="delivered"

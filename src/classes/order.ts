import {Entity} from "@/interfaces/entity";
import {OrderItem} from "@/classes/order_item";
import OrderItems from "@/secure/orders/OrderItems.vue";

export class Order implements Entity{
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    order_items: OrderItem[];

    constructor(id =0, first_name = '', last_name = '', email = '', orderItems = []) {
        this.id = id;
        this.email = email;
        this.first_name = first_name;
        this.last_name = last_name;
        this.order_items = orderItems;
    }

}
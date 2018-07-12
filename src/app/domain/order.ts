export enum Side {
    BUY = 'BUY',
    SELL = 'SELL'
}

export interface OrderStatus {
    committed: number;
    done: number;
    notDone: number;
    uncommitted: number;
    pctDone: number;
    pctNotDone: number;
    pctUncommitted: number;
}

/**
 * An order to buy or sell a security for a specific fund.
 */
export class Order {
    constructor(
        readonly id: string,
        public side: Side,
        public symbol: string,
        public quantity: number,
        public committed: number = 0,
        public executed: number = 0
    ) {}

    /**
     * Returns true when the order is fully placed (i.e. fully committed)
     * @returns {boolean}
     */
    get isPlaced(): boolean {
        return this.committed >= this.quantity;
    }

    /**
     * Returns true when the order is fully executed (a.k.a. done)
     * @returns {boolean}
     */
    get isExecuted(): boolean {
        return this.executed >= this.quantity;
    }

    get status(): OrderStatus {
        const { quantity, committed, executed } = this;
        const notDone = committed - executed;
        const uncommitted = quantity - committed;
        const pctDone = executed / quantity;
        const pctNotDone = notDone / quantity;
        const pctUncommitted = uncommitted / quantity;

        return {
            committed,
            done: executed,
            notDone,
            uncommitted,
            pctDone,
            pctNotDone,
            pctUncommitted
        };
    }
}

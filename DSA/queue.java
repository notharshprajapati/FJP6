public class queue {
    private int arr[];
    private int sizeOfArr = 0;
    private int sizeOfQueue = -1;
    private int front = 0, back = 0;

    // constrictor
    public queue() {
        initilize(5);
    }

    public queue(int size) {
        initilize(size);
    }

    public void initilize(int size) {
        this.arr = new int[size];
        this.sizeOfArr = size;
        this.front = this.back = 0;
        this.sizeOfQueue = 0;
    }

    // exceptions
    private void isQueueFullException() throws Exception {
        if (this.sizeOfArr == this.sizeOfQueue) {
            throw new Exception("queueIsFull");
        }
    }

    private void isQueueEmptyException() throws Exception {
        if (0 == this.sizeOfQueue) {
            throw new Exception("queueIsEmpty");
        }
    }

    // functions

    public boolean isEmpty() {
        if (this.sizeOfQueue == 0) {
            return true;
        }
        return false;
    }

    public void push(int val) throws Exception {
        isQueueFullException();
        this.arr[this.back] = val;
        this.sizeOfQueue++;
        this.back = (this.back + 1) % this.sizeOfArr;
    }

    public int pop() throws Exception {
        isQueueEmptyException();
        int val = this.arr[this.front];
        this.arr[this.front] = 0;
        this.sizeOfQueue--;
        this.front = (this.front + 1) % this.sizeOfArr;

        return val;
    }

    public int front() throws Exception {
        return this.arr[this.front];
    }

    public int size() {
        return this.sizeOfQueue;
    }

    public int sizeOfArray() {
        return this.sizeOfArr;
    }

    public void display() {
        int i = this.front;
        while (i < this.sizeOfQueue) {
            System.out.println(this.arr[i] + " ");
            i = (i + 1) % this.sizeOfArr;
            if (i == this.front) {
                break;
            }
        }
    }

}
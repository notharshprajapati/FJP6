public class stack {
    private int arr[];
    private int sizeOfArr = 0;
    private int sizeOfStack = 0;
    private int tos = -1;

    // constrictor
    public stack() {
        initilize(5);
    }

    public stack(int size) {
        initilize(size);
    }

    protected void initilize(int size) {
        this.arr = new int[size];
        this.sizeOfArr = size;
        this.sizeOfStack = 0;
        this.tos = -1;
    }

    // exceptions
    private void isStackFullException() throws Exception {
        if (this.sizeOfArr == this.sizeOfStack) {
            throw new Exception("stackIsFull");
        }
    }

    private void isStackEmptyException() throws Exception {
        if (0 == this.sizeOfStack) {
            throw new Exception("stackIsEmpty");
        }
    }

    // functions

    public boolean isEmpty() {
        if (this.sizeOfStack > 0) {
            return false;
        }
        return true;
    }

    public void push(int val) throws Exception {
        isStackFullException();
        this.tos++;
        this.arr[this.tos] = val;
        this.sizeOfStack++;
    }

    public int pop() throws Exception {
        isStackEmptyException();
        int val = this.arr[this.tos];
        this.arr[this.tos] = 0;
        this.tos--;
        this.sizeOfStack--;
        return val;
    }

    public int peek() throws Exception {
        isStackEmptyException();
        int val = this.arr[this.tos];
        return val;
    }

    public int size() {
        return this.sizeOfStack;
    }

    public int sizeOfArray() {
        return this.sizeOfArr;
    }

    public void display() {
        for (int i = 0; i < this.sizeOfStack; i++) {
            System.out.println(this.arr[i] + " ");
        }
    }

}
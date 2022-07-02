public class stackExtended extends stack {

    public stackExtended() {
        super(5);
    }

    public stackExtended(int size) {
        super(size);
    }

    @Override
    public void push(int val) throws Exception {
        if (super.sizeOfArray() == super.size()) {
            int temp[] = new int[super.size()];
            for (int i = super.size() - 1; i >= 0; i--) {
                temp[i] = super.pop();
            }
            super.initilize(super.sizeOfArray() * 2);

            for (int i : temp) {
                super.push(i);
            }

        }
        super.push(val);
    }

}

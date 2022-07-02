public class queueExtended extends queue {

    public queueExtended() {
        super(5);
    }

    public queueExtended(int size) {
        super(size);
    }

    @Override
    public void push(int val) throws Exception {
        if (super.sizeOfArray() == super.size()) {
            int temp[] = new int[super.size()];
            for (int i = 0; i < super.sizeOfArray(); i++) {
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

public class client {

    public static void main(String[] args) throws Exception {
        queueExtended st = new queueExtended();
        for (int i = 1; i <= 5; i++) {
            st.push(i * 10);
        }

        st.display();
    }
}

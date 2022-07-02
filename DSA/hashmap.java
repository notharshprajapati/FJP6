import java.io.*;
import java.util.*;

public class hashmap {

    public static void main(String[] args) throws Exception {
        Scanner scn = new Scanner(System.in);
        HashMap<Integer, Boolean> hm = new HashMap<>();

        int size = scn.nextInt();
        int arr[] = new int[size];
        for (int i = 0; i < size; i++) {
            int data = scn.nextInt();
            arr[i] = data;
        }

        for (int val : arr) {
            hm.put(val, true);
        }

        for (int val : arr) {
            if (hm.containsKey(val - 1)) {
                hm.put(val, false);
            }
        }

        int msp = 0;
        int mlen = 0;
        for (int val : arr) {
            if (hm.containsKey(val)) {
                int tsp = val;
                int tlen = 1;

                while (hm.containsKey(tsp + tlen++)) {
                }
                if (tlen > mlen) {
                    msp = tsp;
                    mlen = tlen;
                }
            }
        }
        for (int i = 0; i < mlen; i++) {
            System.out.println(msp + i);
        }
    }
}
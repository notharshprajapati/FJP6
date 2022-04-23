import java.io.*;
import java.util.*;

public class Main {

    public static void main(String[] args) throws Exception {
        Scanner scn = new Scanner(System.in);
        int n = scn.nextInt();
        ArrayList<String> list = getStairPaths(n);

        list.remove(list.size() - 1);
        System.out.println(list);
    }

    public static ArrayList<String> getStairPaths(int n) {
        if (n == 0) {
            ArrayList<String> base = new ArrayList();
            base.add("");
            return base;
        }

        ArrayList<String> mylist = new ArrayList();
        for (int i = 1; i <= n; i++) {
            ArrayList<String> pathLen = getStairPaths(n - i);

            for (String path : pathLen) {
                mylist.add(i + path);
            }
        }
        return mylist;
    }

}
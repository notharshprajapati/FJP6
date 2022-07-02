import java.io.*;
import java.util.*;

public class Main {

    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String str = br.readLine();
        int arr[] = new int[str.length()];

        Stack<Integer> stack = new Stack<>();

        int low = 1;
        for (int i = 0; i < str.length(); i++) {
            char ch = str.charAt(i);
            if (ch == 'i') {
                while (low < i + 1) {
                    stack.push(low++);
                }
                stack.push(i + 1);
                low = i + 1;

                while (stack.size() > 0) {
                    System.out.print(stack.pop());
                }
            }
        }

        low++;
        while (low < str.length() + 1) {
            stack.push(low++);
        }
        stack.push(str.length() + 1);

        while (stack.size() > 0) {
            System.out.print(stack.pop());
        }
    }
}
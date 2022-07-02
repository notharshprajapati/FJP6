import java.lang.reflect.Array;
import java.util.*;

public class tree {

    public static class Node {
        int data;
        ArrayList<Node> children = new ArrayList();

        Node(int data) {
            this.data = data;
        }

    }

    public static void levelOrder(Node root) {
        Queue<Node> queue = new ArrayDeque<Node>();
        queue.add(root);

        while (queue.size() > 0) {
            Node temp = queue.remove();
            System.out.print(temp.data + " ");

            for (Node child : temp.children) {
                queue.add(child);
            }
        }
        System.out.print(".");
    }

    public static void lineOrder(Node root) {
        Queue<Node> cque = new ArrayDeque<>();
        Queue<Node> que = new ArrayDeque<>();

        que.add(root);

        while (que.size() > 0) {
            Node temp = que.remove();
            System.out.print(temp.data + " ");

            for (Node child : temp.children) {
                cque.add(child);
            }

            if (que.size() == 0) {
                System.out.println();
                que = cque;
                cque = new ArrayDeque<>();
            }
        }
        System.out.print(".");
    }

    public static void zigzagOrder(Node root) {
        Queue<Node> que = new ArrayDeque<>();
        Stack<Node> stack = new Stack<>();

        boolean path = false;

        que.add(root);
        while (que.size() > 0 || stack.size() > 0) {

            if (path) {
                Node temp = que.remove();
                System.out.print(temp.data + " ");

                for (Node child : temp.children) {
                    stack.push(child);
                }
            } else {
                Node temp = stack.pop();
                System.out.print(temp.data + " ");

                for (Node child : temp.children) {
                    que.add(child);
                }

            }
            path = !path;
            System.out.println();
        }
    }

    public static void lineOrder2(Node node) {
        LinkedList<Node> que = new LinkedList<>();
        que.addLast(node);

        while (que.size() != 0) {
            int currSize = que.size();

            while (currSize-- > 0) {
                Node rnode = que.removeFirst();
                System.out.println(rnode.data + " ");

                for (Node child : rnode.children) {
                    que.addLast(child);
                }

            }
            System.out.println();
        }

    }

    public static Node construct(int[] arr) {
        Stack<Node> stack = new Stack<>();
        Node root = null;

        for (int ptr : arr) {
            if (ptr != -1) {
                Node node = new Node(ptr);
                stack.push(node);
            } else {
                Node node = stack.pop();
                if (stack.size() > 0) {
                    Node parent = stack.peek();
                    parent.children.add(node);
                } else {
                    root = node;
                }
            }
        }

        return root;
    }

    public static void serialise(Node node, ArrayList<Integer> list) {
        list.add(node.data);
        for (Node child : node.children) {
            serialise(child,list);
        }
        list.add(-1);
    }

    public static void main(String[] args) {
        int[] arr = { 10, 20, 50, -1, 60, -1, -1, 30, 70, -1, 80, 110, -1, 120, -1, -1, 90, -1, -1, 40, 100, -1, -1,
                -1 };

        Node root = construct(arr);
        // levelOrder(root);
        ArrayList<Integer> list = new ArrayList<>();
        serialise(root, list);
        System.out.println(list);

        // Node root = new Node(10);

        // Node two = new Node(20);
        // root.children.add(two);

        // Node three = new Node(30);
        // root.children.add(three);

        // Node four = new Node(40);
        // root.children.add(four);

        // Node five = new Node(50);
        // two.children.add(five);

        // Node six = new Node(60);
        // two.children.add(six);

        // Node seven = new Node(70);
        // three.children.add(seven);

        // Node eight = new Node(80);
        // three.children.add(eight);

        // Node nine = new Node(90);
        // three.children.add(nine);

        // Node ten = new Node(100);
        // four.children.add(ten);

        // Node eleven = new Node(110);
        // eight.children.add(eleven);

        // Node tweleve = new Node(120);
        // eight.children.add(tweleve);

        // levelOrder(root);
        // lineOrder(root);
        // zigzagOrder(root);
    }
}
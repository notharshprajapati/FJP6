import java.io.*;
import java.util.*;

public class Main {

    public static class Node {
        int data;
        Node next;
    }

    public static class LinkedList {
        Node head;
        Node tail;
        int size;

        void addLast(int val) {
            Node node = new Node();
            node.data = val;
            if (this.size == 0) {
                this.head = node;
                this.tail = node;
            } else {
                this.tail.next = node;
                this.tail = node;
            }
            this.size++;
        }

        void addFirst(int val) {
            Node temp = new Node();
            temp.data = val;
            if (size == 0) {
                temp.next = null;
                head = tail = temp;
            } else {
                temp.next = this.head;
                this.head = temp;
            }
            size++;
        }

        void addAt(int idx, int val) {
            Node ptr = this.head;
            for (int i = 0; i < idx; i++) {
                ptr = ptr.next;
            }
            Node temp = new Node();
            temp.data = val;
            temp.next = ptr.next;
            ptr.next = temp;
            size++;
        }

        void display() {
            Node ptr = this.head;
            while (ptr != null) {
                System.out.print(ptr.data + " ");
                ptr = ptr.next;
            }
            System.out.println();
        }

        void getAt(int idx) {
            if (idx > size) {
                System.out.println("null");
            } else {
                Node temp = head;
                for (int i = 0; i < idx; i++) {
                    temp = temp.next;
                }
                System.out.print(temp.data + " ");
            }
        }

        void removeFirst() {
            if (this.size == 0) {
                System.out.println("List is empty");
            } else if (this.size == 1) {
                this.head = this.tail = null;
                this.size = 0;
            } else {
                Node nbr = this.head.next;
                this.head.next = null;
                this.head = nbr;
                this.size--;
            }
        }

        void removeLast() {
            if (size == 0) {
                System.out.println("List is empty");
            } else if (size == 1) {
                head = tail = null;
                size = 0;
            } else {
                Node ptr = head;
                for (int i = 0; i < size - 1; i++) {
                    ptr = ptr.next;
                }
                ptr.next = null;
            }
        }

        void kLast(int idx) {
            Node fast = head;
            Node slow = head;
            for (int i = 0; i < idx; i++) {
                fast = fast.next;
            }
            for (; fast.next == null; fast = fast.next) {
                slow = slow.next;
            }
        }

        void mid() {
            Node fast = head;
            Node slow = head;
            while (fast.next != null || fast.next.next != null) {
                fast = fast.next.next;
                slow = slow.next;
            }
            System.out.println(slow.data);
        }

        Node getNode(int idx) {
            Node temp = head;
            for (int i = 0; i < idx; i++) {
                temp = temp.next;
            }
            return temp;
        }

        void reverse() {
            Node prev = null;
            Node curr = head;

            while (curr != null) {
                Node next = curr.next;

                curr.next = prev;

                prev = curr;
                curr = next;
            }

            Node temp = head;
            head = tail;
            tail = temp;
        }

        LinkedList mergeTwoSortedLists(LinkedList l1, LinkedList l2) {
            LinkedList res = new LinkedList();

            

            return res;
        }
    }

    public static void main(String[] args) {
        LinkedList ll = new LinkedList();
        ll.addLast(10);
        ll.addLast(20);
        ll.addLast(30);
        ll.addLast(40);
        ll.addLast(50);
        ll.addLast(60);
        ll.display();
        ll.reverse();
        ll.display();
    }

}
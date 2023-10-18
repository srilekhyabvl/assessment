import java.util.Scanner;
import java.util.HashSet;

public class PangramChecker {
    public static void main(String[] args) {
            System.out.println("Enter any sentence");
            Scanner sc = new Scanner(System.in);
            String input = sc.nextLine();
            sc.close();
        
        if (isPangram(input)) {
            System.out.println("The input is a pangram.");
        } else {
            System.out.println("The input is not a pangram.");
        }
    }

    public static boolean isPangram(String input) {
        // Remove spaces and convert the input to lowercase to ignore case
        input = input.replaceAll("\\s", "").toLowerCase();
        
        // Use a HashSet to keep track of unique letters in the input
        HashSet<Character> letters = new HashSet<>();

        for (char c : input.toCharArray()) {
            if (Character.isLetter(c)) {
                letters.add(c);
            }
        }

        // If the size of the HashSet is 26, it contains all the letters of the alphabet
        return letters.size() == 26;
    }
}
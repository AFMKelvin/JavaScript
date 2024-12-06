import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.Collections;
import java.util.LinkedList;

public class LastName_SearchSort extends JFrame {

    private final LinkedList<Integer> numberList = new LinkedList<>();
    private final JTextArea displayArea = new JTextArea(10, 20);
    private final JTextField inputField = new JTextField(10);

    public LastName_SearchSort() {
        setTitle("Number Sort, Shuffle, Reverse");
        setLayout(new BorderLayout());

        // Input panel with text field and add button
        JPanel inputPanel = new JPanel();
        inputPanel.add(new JLabel("Enter number:"));
        inputPanel.add(inputField);
        JButton addButton = new JButton("Add");
        inputPanel.add(addButton);
        add(inputPanel, BorderLayout.NORTH);

        // Display area for numbers
        displayArea.setEditable(false);
        add(new JScrollPane(displayArea), BorderLayout.CENTER);

        // Button panel with sort, shuffle, and reverse buttons
        JPanel buttonPanel = new JPanel();
        JButton sortButton = new JButton("Sort");
        JButton shuffleButton = new JButton("Shuffle");
        JButton reverseButton = new JButton("Reverse");
        buttonPanel.add(sortButton);
        buttonPanel.add(shuffleButton);
        buttonPanel.add(reverseButton);
        add(buttonPanel, BorderLayout.SOUTH);

        // Action listener for Add button
        addButton.addActionListener(e -> addNumber());

        // Action listeners for Sort, Shuffle, and Reverse buttons
        sortButton.addActionListener(e -> sortNumbers());
        shuffleButton.addActionListener(e -> shuffleNumbers());
        reverseButton.addActionListener(e -> reverseNumbers());

        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        pack();
        setVisible(true);
    }

    // Adds a number to the list if unique and there are less than 10 numbers
    private void addNumber() {
        try {
            int number = Integer.parseInt(inputField.getText());
            if (numberList.size() < 10 && !numberList.contains(number)) {
                numberList.add(number);
                updateDisplay();
            } else if (numberList.contains(number)) {
                JOptionPane.showMessageDialog(this, "Duplicate numbers are not allowed.");
            }
        } catch (NumberFormatException ex) {
            JOptionPane.showMessageDialog(this, "Please enter a valid integer.");
        }
        inputField.setText("");
    }

    // Sorts the numbers
    private void sortNumbers() {
        Collections.sort(numberList);
        updateDisplay();
    }

    // Shuffles the numbers
    private void shuffleNumbers() {
        Collections.shuffle(numberList);
        updateDisplay();
    }

    // Reverses the numbers
    private void reverseNumbers() {
        Collections.reverse(numberList);
        updateDisplay();
    }

    // Updates display area with the current list of numbers
    private void updateDisplay() {
        displayArea.setText("");
        for (Integer num : numberList) {
            displayArea.append(num + "\n");
        }
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(LastName_SearchSort::new);
    }
}

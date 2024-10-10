import csv

# Define working table
table = []

# [STEP 1]: Read base file (keep only relevant columns)
with open('Main Inventory.csv') as file:

  # Define reader
  reader = csv.reader(file)

  # Iterate over rows
  for row in reader:
    newrow = []

    # Keep only the columns we need (first 6)
    for col in range(0, 6):
      newrow.append(row[col])
      
    # Add row to working table
    table.append(newrow)

# [STEP 2]: Write (or overwrite) new CSV
with open("Stockroom Inventory.csv", "w", newline='') as file:
  
  # Define writer
  writer = csv.writer(file)
  
  # Define and write headers
  newrow = ["Name", "Quantity", "Unit", "Location", "Price", "Last Updated", "Notes"]
  writer.writerow(newrow)

  # Process each row in working table (except headers)
  for row in range(1, len(table)):

    # Process [Name]
    newrow[0] = str(table[row][2]).strip()

    # Process [Quantity]
    try:

      # Check if base file lists "OUT OF STOCK" instead of 0
      if "out of stock" in str(table[row][4]).strip().lower():
        newrow[1] = 0
        newrow[2] = "Units"

      # Otherwise, try to parse it as "<qty> <unit>"
      else:
        newrow[1] = str(table[row][4]).split(" ")[0].strip()
        newrow[2] = str(table[row][4]).split(" ")[1].strip()

    except:

      # If it can't be parsed, just put the whole thing in the qty column, no unit
      newrow[1] = str(table[row][4]).strip()
      newrow[2] = ""

    # Process [Location]
    newrow[3] = str(table[row][0]).strip()

    # Process [Price]
    # NOTE: No price in base table, leave placeholder
    newrow[4] = 0 #"$-.--"

    # Process [Last Updated]
    newrow[5] = str(table[row][3]).strip()

    # Process [Notes]
    baseNotes = str(table[row][5]).strip()
    baseBackupLocation = str(table[row][1]).strip()

    notes = []

    # If a note exists, include it in notes
    if (baseNotes != ""):
      notes.append(baseNotes)

    # If a backup location exists, include it in notes
    if (baseBackupLocation != ""):
      notes.append(f"Backup location(s): {baseBackupLocation}")

    # Add notes to row
    newrow[6] = ", ".join(notes)

    # Write row to new CSV
    writer.writerow(newrow)

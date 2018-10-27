import pickle
fileName = "list"
places = []

# open file and read the content in a list
with open('list', 'r') as filehandle:  
    for line in filehandle:
        # remove linebreak which is the last character of the string
        currentPlace = line[:-1]

        # add item to the list
        places.append(currentPlace)


with open('listOut.txt', 'w') as filehandle:  
    filehandle.writelines("\"%s\",\n" % place for place in places)
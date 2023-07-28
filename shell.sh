#!/bin/bash

# Functions
is_digit() {
    local char="$1"
    if [[ "$char" =~ [[:digit:]] ]]; then
        return 0  # Return success (0) if it's a digit
    else
        return 1  # Return failure (non-zero) if it's not a digit
    fi
}

# Retrieves the blog's URL
retrieve_Url(){

}

# Checks if this blog will be spotlighted
is_spotlight(){
    local fileName="$1"

}

# Creates a Project Card for the Blog
create_ProjectCard(){

}

old=HEAD^
new=HEAD

if [ $# -eq 1 ]; then
    echo "Usage: $0 [oldCommit] [newCommit]"
    exit 1
elif [ $# -eq 2 ]; then
    old=$1
    new=$2
elif [ $# -gt 2 ]; then
    echo "Usage: $0 [oldCommit] [newCommit]"
    exit 1
fi

git diff $old $new _posts/ > git.diff

grep -no "new file mode" git.diff > filename.txt


# Retrieves the file names of any new blogs
while IFS= read -r line; do
    lineNum=""
    # Process each line here
    for ((i = 0; i < ${#line}; i++)); do
        char="${line:i:1}"
        if is_digit "$char"; then
            lineNum+=$char
        else
            break;
        fi
    done

    # Looks for the file name
    newLine=$(expr "$lineNum" + 5)
    fileLine=$(sed -n "$lineNum,$newLine p" git.diff | grep '+++')
    fileName=$(echo $fileLine | grep -o -E '_posts/.*')

    # Processes the file
    


done < filename.txt


rm -f filename.txt git.diff

# 3565750451626a9bc1bd98dfe4f03da267227af0
# a24e5448a5b362f368934927647cf9c40817c5f9
#./shell.sh 3565750451626a9bc1bd98dfe4f03da267227af0 a24e5448a5b362f368934927647cf9c40817c5f9
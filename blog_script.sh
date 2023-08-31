#!/bin/bash
# DO NOT MOVE THIS SHELL SCRIPT, it navigates the root directory of the repository, moving the shell script
# will require changes to the script itself

modals=$(expr $(grep -E 'plus:.*' _includes/modals.html | grep -oE '[0-9]+') + 0) # checks the number on line 54 for accuracy
portfolio=$(expr $(grep -E 'plus:.*' _includes/portfolio_grid.html | grep -oE '[0-9]+') + 0) # checks the number on line 31 for accuracy

post_count=$(expr $(ls -p _posts | wc -l) + 0) # counts the number of blog posts

# The if statements checks if the number of blogs and COUNT are the same. If they aren't the same, it will
# update the values to the number of blogs.

if [ post_count != modals ]; then
    old_pattern="{% assign modified_index = forloop.index | plus: $modals %}" # a grep command looking for the specific line with the logic
    new_pattern="{% assign modified_index = forloop.index | plus: $post_count %}"
    sed "s/$old_pattern/$new_pattern/" _includes/modals.html > temp.txt # replaces that line with the new number
    cat < temp.txt > _includes/modals.html # replaces modals.html with the updated version
    rm -f temp.txt
fi

if [ post_count != portfolio ]; then # does the same as the if statement above
    old_pattern="{% assign modified_index = forloop.index | plus: $portfolio %}"
    new_pattern="{% assign modified_index = forloop.index | plus: $post_count %}"
    sed "s/$old_pattern/$new_pattern/" _includes/portfolio_grid.html > temp.txt
    cat < temp.txt > _includes/portfolio_grid.html
    rm -f temp.txt
fi
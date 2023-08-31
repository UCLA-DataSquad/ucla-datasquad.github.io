#!/bin/bash

modals=$(expr $(grep -E 'plus:.*' _includes/modals.html | grep -oE '[0-9]+') + 0)
portfolio=$(expr $(grep -E 'plus:.*' _includes/portfolio_grid.html | grep -oE '[0-9]+') + 0)

post_count=$(expr $(ls -p _posts | wc -l) + 0)

if [ post_count != modals ]; then
    old_pattern="{% assign modified_index = forloop.index | plus: $modals %}"
    new_pattern="{% assign modified_index = forloop.index | plus: $post_count %}"
    sed "s/$old_pattern/$new_pattern/" _includes/modals.html > temp.txt
    cat < temp.txt > _includes/modals.html
    rm -f temp.txt
fi

if [ post_count != portfolio ]; then
    old_pattern="{% assign modified_index = forloop.index | plus: $portfolio %}"
    new_pattern="{% assign modified_index = forloop.index | plus: $post_count %}"
    sed "s/$old_pattern/$new_pattern/" _includes/portfolio_grid.html > temp.txt
    cat < temp.txt > _includes/portfolio_grid.html
    rm -f temp.txt
fi
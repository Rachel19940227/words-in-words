package com.words.words.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class words {
    private int wordsID;
    private String word;
    private String pos;
    private String definition;
}
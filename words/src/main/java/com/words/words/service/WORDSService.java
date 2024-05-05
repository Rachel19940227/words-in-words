package com.words.words.service;
import com.words.words.mapper.WORDSMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Arrays;
import java.util.Collections;


@Service
public class WORDSService {
    @Autowired
    private WORDSMapper wordsMapper;

    public boolean checkWordExists(String inputWord) {
        int count = wordsMapper.countByWord(inputWord);
        return count > 0;
    }


}


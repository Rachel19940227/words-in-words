package com.words.words.controller;

import com.words.words.entity.words;
import com.words.words.mapper.WORDSMapper;
import com.words.words.service.WORDSService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;
//@RestController
//public class WORDSController {
//    @Autowired
//    WORDSMapper wordsMapper;
//
//    @RequestMapping("/select2")
//    public words select2() {
//        return wordsMapper.select2();
//    }
//}

@RestController
@CrossOrigin(origins = "*")
public class WORDSController {
    @Autowired
    WORDSMapper wordsMapper;

    @GetMapping("/selectByWord")
    public words selectByWord(@RequestParam String inputWord) {
        return wordsMapper.selectByWord(inputWord);
    }

    @Autowired
    WORDSService wordsService;

    @GetMapping("/checkWordExists")
    public boolean checkWordExists(@RequestParam String inputWord) {
        return wordsService.checkWordExists(inputWord);
    }

}
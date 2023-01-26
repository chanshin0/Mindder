package com.ssafy.mindder.comments.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.mindder.comments.model.CommentsDto;
import com.ssafy.mindder.comments.model.service.CommentsService;

import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;

@CrossOrigin(origins = { "*" }, maxAge = 6000)
@RequestMapping("/comments")
@RestController
public class CommentsController {

	@Autowired
	private CommentsService commentsService;

	private static final Logger logger = LoggerFactory.getLogger(CommentsController.class);
	private static final String SUCCESS = "success";
	private static final String FAIL = "fail";

	@ApiOperation(value = "피드 댓글 작성", notes = "댓글을 작성한다. 그리고 DB입력 성공여부에 따라 'success' 또는 'fail' 문자열을 반환한다.", response = String.class)
	@PostMapping
	public ResponseEntity<String> writeFeeds(
			@RequestBody @ApiParam(value = "피드 정보.", required = true) CommentsDto commentsDto) throws Exception {
		logger.info("writeComment - 호출");
		if (commentsService.writeComment(commentsDto)) {
			return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
		}
		return new ResponseEntity<String>(FAIL, HttpStatus.NO_CONTENT);
	}

	@ApiOperation(value = "피드 댓글 삭제", notes = "댓글 번호에 해당하는 댓글을 삭제한다. 그리고 DB삭제 성공여부에 따라 'success' 또는 'fail' 문자열을 반환한다.", response = String.class)
	@DeleteMapping("/{feedIdx}")
	public ResponseEntity<String> deleteFeed(
			@PathVariable("commentIdx") @ApiParam(value = "삭제할 댓글 번호.", required = true) int commentIdx)
			throws Exception {
		logger.info("deleteFeed - 호출");
		if (commentsService.deleteComment(commentIdx)) {
			return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
		}
		return new ResponseEntity<String>(FAIL, HttpStatus.NO_CONTENT);
	}

}
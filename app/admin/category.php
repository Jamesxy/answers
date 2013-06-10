<?php
--------------------------------------------------------------------------
---------------------------------------------------------------------------
	{
		if (!is_array($_POST['from_ids']) OR !$_POST['target_id'])
		{
			H::ajax_json_output(AWS_APP::RSM(null, -1, AWS_APP::lang()->_t('请先选择指定分类和目标分类')));
		}
		
		if (in_array($_POST['target_id'], $_POST['from_ids']))
		{
			H::ajax_json_output(AWS_APP::RSM(null, '-1', AWS_APP::lang()->_t('指定分类不能与目标分类相同')));
		}
		
		$this->model('question')->question_move_category($_POST['from_ids'], $_POST['target_id']);
		
		H::ajax_json_output(AWS_APP::RSM(null, 1, AWS_APP::lang()->_t('问题批量移动处理完成')));
	}
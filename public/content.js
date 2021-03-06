'use strict';

chrome.runtime.onMessage.addListener((request) => {
  comment(request.lgtmizedUrl);
  approve();
  submit();
});

const comment = (url) => {
  const comment = `![LGTM](${url})`;
  document.getElementById('pull_request_review_body').value = comment;
};

const approve = () => {
  document.getElementsByName('pull_request_review[event]')[1].checked = true;
};

const submit = () => {
  document.getElementById('pull_request_review_body').form.submit();
};

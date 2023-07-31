
<?php 
  // Create a function to call when a repository has made a build
  function buildCheck(){
   // Code to run when the build has been made
    $this->runPythonCode();
  }
 
 // Use the GitHub API to check for updates on the repository 
 $url = 'https://api.github.com/repos/{username}/{repository}/events';
 $response = file_get_contents($url);
 $data = json_decode($response);
 
 foreach($data as $event){
  if($event->type == 'PushEvent'){
   // Call the buildCheck function
  $this->buildCheck();
  }
 }

    function runPythonCode($github_repo) {
        // clone the repo


      
        $clone_cmd = "git clone $github_repo";
        exec($clone_cmd);

        // search for main.py
        $main_py = glob("*/main.py", GLOB_BRACE);
        if (empty($main_py)) {
            echo "Error: main.py not found in repo.";
            return;
        }

        // run the main.py
        $main_py = $main_py[0];
        exec("python $main_py", $output, $return);

        // check lints and errors
        $lints = [];
        $errors = [];
        foreach ($output as $line) {
            if (strpos($line, "lint")) {
                $lints[] = $line;
            } elseif (strpos($line, "error")) {
                $errors[] = $line;
            }
        }
        if (!empty($lints)) {
            echo "Lints:\n";
            foreach ($lints as $lint) {
                echo $lint . "\n";
            }
        }
        if (!empty($errors)) {
            echo "Errors:\n";
            foreach ($errors as $error) {
                echo $error . "\n";
            }
        }
    }
?>

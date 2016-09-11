import subprocess

# process = subprocess.Popen(
# "git config credential.helper store", stdout=subprocess.PIPE, shell=True)

cmds = [
    "git add .",
    "git commit -m ",
    "git push"
]
print("Enter a commit message or $ for manual git")
commitMessage = "'" + raw_input().strip() + "'"
if commitMessage == "'$'":
    print("Manual Git selected")
else:
    cmds[1] += "_".join(commitMessage.split())
    for cmd in cmds:
        query = cmd.split()
        process = subprocess.Popen(query, stdout=subprocess.PIPE)
        print(process.communicate()[0])

print('All done!')

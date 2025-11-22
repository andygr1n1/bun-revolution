# GitHub SSH Setup Guide

This repository uses `github.ag` as a custom SSH host alias. To push to this repository, you need to set up SSH keys and configure your SSH config.

## 1. Generate SSH Key (if you don't have one)

If you don't already have an SSH key for your GitHub account:

```bash
ssh-keygen -t ed25519 -C "andy.grini@gmail.com" -f ~/.ssh/id_ed25519
```

When prompted, you can press Enter to accept the default file location, or set a passphrase for extra security.

## 2. Add SSH Key to GitHub

Copy your public key to clipboard:

```bash
cat ~/.ssh/id_ed25519.pub | pbcopy
```

Then:

1. Go to GitHub → Settings → SSH and GPG keys
2. Click "New SSH key"
3. Paste your public key
4. Save

## 3. Add Key to SSH Agent

Add your SSH key to the SSH agent:

```bash
ssh-add ~/.ssh/id_ed25519
```

To verify the key was added:

```bash
ssh-add -l
```

You should see your key listed.

## 4. Setup SSH Config

Add the following to your `~/.ssh/config` file:

```
Host github.ag
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_ed25519
  IdentitiesOnly yes
```

**Important:** The `IdentitiesOnly yes` option ensures that only the specified key (`id_ed25519`) is used, preventing conflicts with other SSH keys in your agent.

## 5. Verify SSH Connection

Test the SSH connection:

```bash
ssh -T git@github.ag
```

You should see: `Hi andygr1n1! You've successfully authenticated...`

## 6. Push to Repository

Once configured, you can push normally:

```bash
git push
```

The repository remote is configured to use `git@github.ag:andygr1n1/bun-revolution.git`, which will automatically use the SSH config above.

## Troubleshooting

**If you get "Permission denied" errors:**

-   Make sure the key is added to your SSH agent: `ssh-add ~/.ssh/id_ed25519`
-   Verify the key is added to your GitHub account
-   Check that `IdentitiesOnly yes` is set in your SSH config
-   Try removing other keys from the agent if they're conflicting: `ssh-add -D` (then re-add the correct one)

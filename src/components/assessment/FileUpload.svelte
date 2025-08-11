<!-- src/components/assessment/FileUpload.svelte -->
<script>
  import { createEventDispatcher } from "svelte";
  import Button from "$components/ui/Button.svelte";

  export let assessmentId = "";
  export let section = "";
  export let accept = "*";
  export let multiple = false;
  export let maxSize = 10 * 1024 * 1024; // 10MB
  export let label = "Upload File";
  export let description = "";
  export let variant = "primary";
  export let size = "medium";
  export let uploadedFiles = [];

  const dispatch = createEventDispatcher();

  let uploading = false;
  let dragOver = false;
  let fileInput;

  function handleFileSelect(event) {
    const files = Array.from(event.target.files || []);
    if (files.length > 0) {
      uploadFiles(files);
    }
  }

  function handleDrop(event) {
    event.preventDefault();
    dragOver = false;
    const files = Array.from(event.dataTransfer.files);
    if (files.length > 0) {
      uploadFiles(files);
    }
  }

  function handleDragOver(event) {
    event.preventDefault();
    dragOver = true;
  }

  function handleDragLeave(event) {
    event.preventDefault();
    dragOver = false;
  }

  async function uploadFiles(files) {
    uploading = true;
    const results = [];

    for (const file of files) {
      try {
        // Validate file size
        if (file.size > maxSize) {
          dispatch("error", {
            message: `File "${
              file.name
            }" is too large. Maximum size is ${Math.round(
              maxSize / (1024 * 1024)
            )}MB.`,
            file,
          });
          continue;
        }

        // Create form data
        const formData = new FormData();
        formData.append("file", file);
        formData.append("assessmentId", assessmentId);
        formData.append("section", section);

        // Upload file
        const response = await fetch("/api/assessment/upload", {
          method: "POST",
          body: formData,
        });

        const result = await response.json();

        if (result.success) {
          results.push({
            ...result,
            originalFile: file,
          });
          dispatch("success", {
            message: `File "${file.name}" uploaded successfully`,
            file: result,
            originalFile: file,
          });
        } else {
          dispatch("error", {
            message: result.error || `Failed to upload "${file.name}"`,
            file,
          });
        }
      } catch (error) {
        console.error("Upload error:", error);
        dispatch("error", {
          message: `Error uploading "${file.name}": ${error.message}`,
          file,
        });
      }
    }

    uploading = false;
    uploadedFiles = [...uploadedFiles, ...results];
    dispatch("upload", { files: results, allFiles: uploadedFiles });

    // Clear input
    if (fileInput) {
      fileInput.value = "";
    }
  }

  function removeFile(index) {
    uploadedFiles = uploadedFiles.filter((_, i) => i !== index);
    dispatch("remove", { files: uploadedFiles, removedIndex: index });
  }

  function triggerFileInput() {
    fileInput?.click();
  }
</script>

<div class="file-upload-container">
  <input
    bind:this={fileInput}
    type="file"
    {accept}
    {multiple}
    on:change={handleFileSelect}
    style="display: none;"
  />

  <div
    class="upload-area"
    class:drag-over={dragOver}
    class:uploading
    on:drop={handleDrop}
    on:dragover={handleDragOver}
    on:dragleave={handleDragLeave}
    role="button"
    tabindex="0"
    on:click={triggerFileInput}
    on:keydown={(e) => e.key === "Enter" && triggerFileInput()}
  >
    <div class="upload-content">
      {#if uploading}
        <div class="upload-spinner">
          <div class="spinner" />
          <span>Uploading...</span>
        </div>
      {:else}
        <div class="upload-icon">📁</div>
        <Button
          {variant}
          {size}
          on:click={triggerFileInput}
          disabled={uploading}
        >
          {label}
        </Button>
        {#if description}
          <p class="upload-description">{description}</p>
        {/if}
        <p class="drag-text">Or drag and drop files here</p>
      {/if}
    </div>
  </div>

  {#if uploadedFiles.length > 0}
    <div class="uploaded-files">
      <h4>Uploaded Files:</h4>
      <div class="files-list">
        {#each uploadedFiles as file, index}
          <div class="file-item">
            <div class="file-info">
              <span class="file-name">{file.originalName || file.filename}</span
              >
              <span class="file-size">
                {Math.round((file.size || 0) / 1024)}KB
              </span>
            </div>
            <button
              class="remove-button"
              on:click={() => removeFile(index)}
              title="Remove file"
            >
              ✕
            </button>
          </div>
        {/each}
      </div>
    </div>
  {/if}
</div>

<style lang="scss">
  .file-upload-container {
    width: 100%;
  }

  .upload-area {
    border: 2px dashed rgba(255, 255, 255, 0.3);
    border-radius: 0.75rem;
    padding: 2rem;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s ease;
    background: rgba(255, 255, 255, 0.02);

    &:hover,
    &.drag-over {
      border-color: #4facfe;
      background: rgba(79, 172, 254, 0.05);
    }

    &.uploading {
      cursor: not-allowed;
      opacity: 0.7;
    }
  }

  .upload-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    .upload-icon {
      font-size: 3rem;
      margin-bottom: 0.5rem;
    }

    .upload-description {
      color: #b0b0b0;
      font-size: 0.9rem;
      margin: 0;
      max-width: 300px;
      line-height: 1.5;
    }

    .drag-text {
      color: #888;
      font-size: 0.85rem;
      margin: 0;
      font-style: italic;
    }
  }

  .upload-spinner {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    .spinner {
      width: 32px;
      height: 32px;
      border: 3px solid rgba(79, 172, 254, 0.3);
      border-top: 3px solid #4facfe;
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }

    span {
      color: #4facfe;
      font-weight: 600;
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .uploaded-files {
    margin-top: 1.5rem;
    padding-top: 1.5rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);

    h4 {
      color: #ffffff;
      margin-bottom: 1rem;
      font-size: 1rem;
    }

    .files-list {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }

    .file-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.75rem;
      background: rgba(255, 255, 255, 0.05);
      border-radius: 0.5rem;
      border: 1px solid rgba(255, 255, 255, 0.1);

      .file-info {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
        flex: 1;

        .file-name {
          color: #ffffff;
          font-weight: 500;
          font-size: 0.9rem;
        }

        .file-size {
          color: #888;
          font-size: 0.8rem;
        }
      }

      .remove-button {
        background: rgba(239, 68, 68, 0.2);
        border: 1px solid rgba(239, 68, 68, 0.4);
        color: #ef4444;
        border-radius: 0.25rem;
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        font-size: 0.8rem;
        transition: all 0.2s ease;

        &:hover {
          background: rgba(239, 68, 68, 0.3);
          border-color: rgba(239, 68, 68, 0.6);
        }
      }
    }
  }

  @media (max-width: 768px) {
    .upload-area {
      padding: 1.5rem;
    }

    .upload-content .upload-icon {
      font-size: 2rem;
    }
  }
</style>
